# book_store_assingment

An e-commerce website for ordering books.

Live: https://client-sonu25122000.vercel.app

Backend BaseURL:- https://adventurous-puce-centipede.cyclic.app
  ## end point 
  1. signup - user/register
  2. login - user/login
  3. get all book - book
  4. get book by id - book/id (id of the book)
  5. add book to the database - book/add (usefull for Admin)
  6. search book by query - book/search?q={query}
  7. add book to the logged in user's cart - user/cart_product/add/:id  (id=product id) -> Authentication needed
  8. get the cart book of a particular user - /user/cart_product -> Authentication needed
  9. update quantity in user's cart ->/user/cart_product/update/id (id=cartproduct id) -> Authentication needed
  10. delete user's  cart book -  /user/cart_product/delete/id (id= cartproduct id) -> Authentication needed
  11. clear cart route -> /user/clear_cart -> Authentication needed
## Features

 - Responsive Navbar
 - Login and SignUp
 - Authentication required for buy the book.
 - Book page which allows to buy Products
 - Add to cart page which shows books added in the cart.
 - Checkout page
 - Shipping address page
 - Payment page 
 - Search functionality (you can search book by name) 
 -  
 # Technology

- **Client:** HTML, CSS, JS, React, Redux, ChakraUI, NodeJS, mongoDB, react-router-dom.

- **Server:** Vercel and Cyclic

## Screenshots

# 1. Landing Page:
![Screenshot 2023-02-27 124634](https://i.postimg.cc/XYjT7DNd/Screenshot-2023-05-28-at-12-05-19-PM.png)

This is the first page of this website in this page you can see all the available book and it has dynamic navbar which is available in all other pages as well because it is exported
as a component and it also contains SignIn and SignUp button through which we can authenticate as a user with one cart button as well.


# 2. Sign Up Page:

![signup](https://i.postimg.cc/pXXZ9N8W/Screenshot-2023-05-28-at-12-25-53-PM.png)

New User can create an account and continue shopping.Initially signup button will be disable if you fill own credentials then it will automatically unDisable.

# 3.  Home Page:

![prod](https://i.postimg.cc/s29Q9xdt/Screenshot-2023-05-28-at-12-27-52-PM.png)

All  book is available here with sort. details.

# 4 Book_Details Page

![book_details] (https://i.postimg.cc/VvwG6DQ3/Screenshot-2023-05-28-at-1-35-46-PM.png) 

In this page you can Add to product button if you are already logged in other you will see login button.

# 4. Cart Page (When you are not logged in):

![cart](https://i.postimg.cc/4NWTtTSB/Screenshot-2023-05-28-at-12-31-48-PM.png)

# 4. Cart Page (When you are logged in but cart is empty):

![cart](https://i.postimg.cc/JzSvc7cc/Screenshot-2023-05-28-at-12-33-08-PM.png)


# 4. Cart Page (When you are logged in and cart is not empty):

![cart] (https://i.postimg.cc/SK01YTkg/Screenshot-2023-05-28-at-12-34-32-PM.png)

All products added in cart will be shown here. you can remove book from the cart also you can increase the quantity (min quantity 1 & max quantity 5)

# 6. Shipping Address page 

![shipping] (https://i.postimg.cc/ZR58WpBf/Screenshot-2023-05-28-at-12-35-51-PM.png)

in this page you have add your address. (all field is required)

# 7. Checkout Page

![checkout] (https://i.postimg.cc/ZRvrPZH3/Screenshot-2023-05-28-at-12-37-47-PM.png)

In this page you can see your address and total price of the book.

# 8. Payment Page:

![payment](https://i.postimg.cc/tRtsKYsJ/Screenshot-2023-05-28-at-12-40-44-PM.png)

# 9. Order Success Page:

![order success] (https://i.postimg.cc/C5LwTM2n/Screenshot-2023-05-28-at-12-42-21-PM.png)

if your order is placed successfully then you can see this page. After successfull order you cart will be empty.
