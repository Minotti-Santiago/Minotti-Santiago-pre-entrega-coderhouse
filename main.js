let products = []
let productId = 1

const form = document.getElementById("product-form")
const addButton = document.getElementById("add-button")
const taskContainer = document.getElementById("task-container")

form.addEventListener("submit", function(event){

    event.preventDefault()

    const productName = document.getElementById("product-name").value;
    const productDesc = document.getElementById("product-desc").value
    const productDate = document.getElementById("product-date").value

    const product ={
        id:productId ++,
        name: productName,
        description: productDesc,
        date: productDate,
    }

    products.push(product)
    renderItems()

    form.reset()
})

function renderItems() {
    // Clear the container first
    taskContainer.innerHTML = ""
    
    // Then render all products
    products.forEach((product) => {
        const productContainer = document.createElement("div")
        productContainer.classList.add("product-container")
        
        const productInfo = document.createElement("div")
        productInfo.classList.add("product-info")

        const deleteBtn = document.createElement("button")
        deleteBtn.classList.add("delete-btn")
        deleteBtn.textContent = "Eliminar"

        productInfo.innerHTML = `
            <ul>
                <div class="product-item">
                <h2>ID</h2>
                    <p>${product.id}</p>
                </div>

                <div class="product-item">
                <h2>Tarea</h2>
                    <p>${product.name}</p>
                </div>

                <div class="product-item">
                <h2>descripcion</h2>
                    <p>${product.description}</p>
                </div>

                <div class="product-item">
                <h2>fecha de vencimiento</h2>
                    <p>${product.date}</p>
                </div>
            </ul>

        `

        deleteBtn.addEventListener("click", () => deleteProduct(product.id))

        productContainer.appendChild(productInfo)
        productContainer.appendChild(deleteBtn)
        taskContainer.appendChild(productContainer)
    })
}

function deleteProduct(productId){
    products = products.filter((product) => product.id !== productId)

    renderItems()
}
