import bag from './bag.jpg'
import one from './one.jpg'
import two from './two.png'
import three from './three.jpg'
import logo from './logo.png'
import me from './Images/me.png'
import search_icon from './search_icon.png'
import profile_icon from './profile_icon.jpg'
import cart_icon from './cart_icon.jpg'
import menu_icon from './menu_icon.png'
import dropdown_icon from './dropdown_icon.png'

export const assets={
    bag,
    one,
    two,
    three,
    logo,
    me,
    search_icon,
    profile_icon,
    cart_icon,
    menu_icon,
    dropdown_icon
}

export const products=[
    {
        _id:'aaa',
        name: 'T-shirt',
        description:'Polo Shirt for men with round neck in cotton fabric',
        price: 1200,
        image: [one],
        category: 'men',
        subcategory:'T-Shirt',
        size:['S','M','L'],
        bestseller:true,
        date: Date.now()
    },
    {
        _id:'aab',
        name: 'T-shirt',
        description:'Polo Shirt for men with round neck in cotton fabric',
        price: 1200,
        image: [two],
        category: 'men',
        subcategory:'T-Shirt',
        size:['S','M','L'],
        bestseller:true,
        date: Date.now()
    },
    { 
        _id:'aac',
        name: 'T-shirt',
        description:'Polo Shirt for men with round neck in cotton fabric',
        price: 1200,
        image: [three],
        category: 'men',
        subcategory:'T-Shirt',
        size:['S','M','L'],
        bestseller:true,
        date: Date.now()
    }
]

export default assets