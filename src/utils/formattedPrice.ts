export function formattedPrice(price: any, currency?: any) {
  if (currency) {
    const formattedPrice = (+price).toLocaleString('en-IN', {
      style: 'currency',
      currency: 'INR',
    })

    let finalFormattedPrice = formattedPrice

    // Check if currency is provided and replace it with '₹ '
    return (finalFormattedPrice = formattedPrice.replace(
      currency,
      '₹ '
    )).concat('/-')
  }

  // Add the '/' sign at the end

  return price.toLocaleString('en-IN').concat('/-')
}
