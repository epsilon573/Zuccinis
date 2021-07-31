import React, { Component } from 'react'

export const DataContext = React.createContext();

export class DataProvider extends Component {

    state = {
        products: [
            {
                "_id": "1",
                "title": "italian Pasta",
                "src": "https://www.eatalianwithroberto.com/wp-content/uploads/2021/01/How-to-sauce-pasta-1024x683.jpg",
                "description": "",
                "content": "asta is a type of food typically made from an unleavened dough of wheat flour mixed with water or eggs, and formed into sheets or other shapes, then cooked by boiling or baking.",
                "price": 9.99,
                "colors": [],
                "count": 1
            },
            {
                "_id": "2",
                "title": "Spaghetti",
                "src": "https://www.archanaskitchen.com/images/archanaskitchen/10-Brands/DelMonte-KidsRecipes/Spaghetti_Pasta_Recipe_In_Creamy_Tomato_Sauce_-_Kids_Recipes_Made_With_Del_Monte-3.jpg",
                "description": "",
                "content": "Spaghetti (Italian: [spaˈɡetti]) is a long, thin, solid, cylindrical pasta. It is a staple food of traditional Italian cuisine. Like other pasta, spaghetti is made of milled wheat and water and sometimes enriched with vitamins and minerals. Italian spaghetti is typically made from durum wheat semolina.",
                "price": 11.99,
                "colors": [],
                "count": 1
            },
            {
                "_id": "3",
                "title": "raviolli",
                "src": "https://upload.wikimedia.org/wikipedia/commons/9/95/Flickr_-_cyclonebill_-_Ravioli_med_skinke_og_asparges_i_mascarponecreme.jpg",
                "description": "",
                "content": "Ravioli is considered a dumpling, with filling sealed between two layers of thin pasta. Though it takes many shapes, including circular or semi-circular forms, the traditional form of ravioli is a square.",
                "price": 12.99,
                "colors": [],
                "count": 1
            },
            {
                "_id": "4",
                "title": "lasagna",
                "src": "https://www.365daysofbakingandmore.com/wp-content/uploads/2011/02/Lasagna-FEATURE.jpg",
                "description": "",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 14.99,
                "colors": [],
                "count": 1
            },
            {
                "_id": "5",
                "title": "tacos",
                "src": "https://lh3.googleusercontent.com/JK2wFuQyLbhS8Z6N7DAcNsQDkkQSvWujFNSfxt8PosCCQ90nIQd1orEILZd1VmL_1ruy2FthXWiNMK2tfnBov0wZD0bS=w1000",
                "description": "",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 6.99,
                "colors": [],
                "count": 1
            },
            
            {
                "_id": "6",
                "title": "Risotto",
                "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoy-C3xW-ujaZazz-GIBizP4Xidk_zBfeS_g&usqp=CAU",
                "description": "",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 15.99,
                "colors": [],
                "count": 1
            },
            {
                "_id": "7",
                "title": "Pizza",
                "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY3NN_W-tH7DkH6emzvYtvoRp2T6K7c4m9-FY2sjRd89HndkHqXp-VCSIqxyAYq2PPfG4&usqp=CAU",
                "description": "",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 15.99,
                "colors": [],
                "count": 1
            },
            {
                "_id": "8",
                "title": "casadella",
                "src": "https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/20627-veggie-quesadillas-760x580.jpg?ext=.jpg",
                "description": "",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 15.99,
                "colors": [],
                "count": 1
            },
            {
                "_id": "9",
                "title": "tiramisu",
                "src": "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/2/4/2/RX-FNM_030111-Sugar-Fix-005_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371597326801.jpeg",
                "description": "",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 15.99,
                "colors": [],
                "count": 1
            }
        ],
        cart: [],
        total: 0
        
    };

    addCart = (id) =>{
        const {products, cart} = this.state;
        const check = cart.every(item =>{
            return item._id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product._id === id
            })
            this.setState({cart: [...cart,...data]})
        }else{
            alert("The product has been added to cart.")
        }
    };

    reduction = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count === 1 ? item.count = 1 : item.count -=1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    increase = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count += 1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    removeProduct = id =>{
        if(window.confirm("Do you want to delete this product?")){
            const {cart} = this.state;
            cart.forEach((item, index) =>{
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })
            this.setState({cart: cart});
            this.getTotal();
        }
       
    };

    getTotal = ()=>{
        const{cart} = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.count);
        },0)
        this.setState({total: res})
    };
    
    componentDidUpdate(){
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    };

    componentDidMount(){
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null){
            this.setState({cart: dataCart});
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null){
            this.setState({total: dataTotal});
        }
    }
   

    render() {
        const {products, cart,total} = this.state;
        const {addCart,reduction,increase,removeProduct,getTotal} = this;
        return (
            <DataContext.Provider 
            value={{products, addCart, cart, reduction,increase,removeProduct,total,getTotal}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}
