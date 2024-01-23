import flipkart
import amazon

amazon_product_url = 'https://www.amazon.in/Nothing-Storage-Display-Qualcomm-Snapdragon/dp/B0CBYV1BKH?th=1'
flipkart_product_url = 'https://www.flipkart.com/nothing-phone-2-dark-grey-128-gb/p/itmc1490711c3eb9?pid=MOBGZSDKDHFGSDCZ'
flipkart_product_url2 = 'https://www.flipkart.com/nothing-phone-2-dark-grey-256-gb/p/itmc1490711c3eb9?pid=MOBGZSDKU5CGE8FX&lid=LSTMOBGZSDKU5CGE8FXD4MGTF&marketplace=FLIPKART'

def amazon_product():
    return amazon.get_amazon_product_info(amazon_product_url)

def flipkart_product():
    return flipkart.get_flipkart_product_info(flipkart_product_url)

def flipkart_product2():
    return flipkart.get_flipkart_product_info(flipkart_product_url2)



print("----------------------------------------------------------------")
print("Flipkart")
print("________________________________________________________________")

print("Product Information:")
for key, value in flipkart_product().items():
    print(f"{key}: {value}")

print("----------------------------------------------------------------")
print("Amazon")
print("________________________________________________________________")


print("Product Information:")
for key, value in flipkart_product2().items():
    print(f"{key}: {value}")