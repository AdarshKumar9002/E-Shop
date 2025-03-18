# Routes
Routes define the paths that allow users to navigate to specific sections of a website.  
For example, in `http://localhost:3000/cart`, the `/cart` part is the route.


## Shop Routes

### GET /

- **Description**: This route handles the request to the home page.
- **Controller**: [`shopController.homePage`](../controllers/shop.js)
- **Path**: `/`

```javascript
router.get('/', shopController.homePage);
```

## Page Not Found Route

### Middleware

- **Description**: This middleware handles requests to undefined routes and renders a 404 page.
- **Controller**: [`pageNotFound`](../controllers/page-not-found.js)

```javascript
app.use(pageNotFound);
```