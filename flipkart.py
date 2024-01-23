import requests
from bs4 import BeautifulSoup

def get_flipkart_product_info(url):
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'}

    # Send a GET request to the Flipkart product page
    response = requests.get(url, headers=headers)

    # Check if the request was successful (status code 200)
    if response.status_code == 200:
        html_content = response.text
        soup = BeautifulSoup(html_content, 'html.parser')

        # Extract product name, rating, and price using appropriate CSS selectors
        product_name_element = soup.select_one('span.B_NuCI')  # Adjust the selector as needed
        product_rating_element = soup.select_one('div._3LWZlK')  # Adjust the selector as needed
        product_price_element = soup.select_one('div._30jeq3._16Jk6d')  # Adjust the selector as needed

        # Check if the elements were found
        product_name = product_name_element.get_text(strip=True) if product_name_element else "Product name not found"
        product_rating = product_rating_element.get_text(
            strip=True) if product_rating_element else "Product rating not found"
        product_price = product_price_element.get_text(
            strip=True) if product_price_element else "Product price not found"

        return {
            "Product Name": product_name,
            "Product Rating": product_rating,
            "Product Price": product_price
        }
    else:
        return f"Failed to retrieve the page. Status code: {response.status_code}"




