const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { items, email } = req.body

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: items.map((item) => ({
          price_data: {
            currency: "usd",
            product_data: {
              name: item.title,
            },
            unit_amount: item.newprice * 100,
          },
          quantity: item.quantity,
        })),
        mode: "payment",
        success_url: `${process.env.HOST}/success`,
        cancel_url: `${process.env.HOST}/checkout`,
        customer_email: email,
      })

      res.status(200).json({ id: session.id })
    } catch (error) {
      console.error(error)
      res.status(500).json({
        error: "An error occurred while creating the checkout session.",
      })
    }
  } else {
    res.setHeader("Allow", "POST")
    res.status(405).end("Method Not Allowed")
  }
}
