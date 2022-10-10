(async() => {
    console.log("...loading");
    const response = await fetch ('http://localhost:3000/api-restful/products/');
    const data = await response.json();
    console.log("data : ",data);
})();