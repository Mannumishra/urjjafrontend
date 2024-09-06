import React, { useEffect, useState } from 'react';
import './Cart.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [data, setData] = useState([]); // State for cart data

  // Fetching cart data from localStorage
  const getCartdata = () => {
    const cartData = JSON.parse(localStorage.getItem('zenscartItems')) || [];
    setData(cartData);
  };

  // Update the item quantity
  const updateItem = (id, action) => {
    const updatedCart = data.map(item => {
      if (item.id === id) {
        if (action === 'INC') {
          return { ...item, productquantity: item.productquantity + 1 };
        } else if (action === 'DEC' && item.productquantity > 1) {
          return { ...item, productquantity: item.productquantity - 1 };
        }
      }
      return item;
    });

    setData(updatedCart);
    localStorage.setItem('zenscartItems', JSON.stringify(updatedCart));
  };

  // Delete an item from the cart
  const deleteItem = (id) => {
    const updatedCart = data.filter(item => item.id !== id);
    setData(updatedCart);
    localStorage.setItem('zenscartItems', JSON.stringify(updatedCart));
  };

  // Calculate the total price
  const calculateTotalPrice = () => {
    return data.reduce((total, item) => total + item.productprice * item.productquantity, 0);
  };

  useEffect(() => {
    getCartdata();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <>
      {data.length ? (
        <div className="container-fluid py-3">
          <div className="container py-3">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Item</th>
                    <th scope="col">Number of Items</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index}>
                      <th scope="row">
                        <div className="d-flex align-items-center">
                          <img
                            src={item.productimage}
                            className="img-fluid me-5 rounded-circle"
                            style={{ width: '80px', height: '80px' }}
                            alt=""
                          />
                        </div>
                      </th>
                      <td>
                        <p className="mb-0 mt-4">{item.productname}</p>
                      </td>
                      <td>
                        <p className="mb-0 mt-4">&#8377;{item.productprice}</p>
                      </td>
                      <td>
                        <p className="mb-0 mt-4">{item.productitem}</p>
                      </td>
                      <td>
                        <p className="mb-0 mt-4">{item.productnumberofitem} Pees</p>
                      </td>
                      <td>
                        <div className="input-group quantity mt-4" style={{ width: '150px' }}>
                          <div className="input-group-btn">
                            <button
                              className="btn btn-sm btn-minus rounded-circle bg-light borderbtncart"
                              onClick={() => updateItem(item.id, 'DEC')}
                            >
                              <i className="fa fa-minus"></i>
                            </button>
                          </div>
                          <p className="mx-3">{item.productquantity}</p>
                          <div className="input-group-btn">
                            <button
                              className="btn btn-sm btn-plus rounded-circle bg-light borderbtncart"
                              onClick={() => updateItem(item.id, 'INC')}
                            >
                              <i className="fa fa-plus"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="mb-0 mt-4">&#8377;{item.productprice * item.productquantity}</p>
                      </td>
                      <td>
                        <button
                          className="btn btn-md rounded-circle bg-light border mt-4"
                          onClick={() => deleteItem(item.id)}
                        >
                          <i className="fa fa-times text-danger"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="row g-4 justify-content-end">
            <div className="col-8"></div>
            <div className="col-sm-8 col-md-7 col-lg-6 col-xl-4">
              <div className="bg-light rounded p-3">
                <h4 className="text-dark">Total Price: &#8377;{calculateTotalPrice()}</h4>
                <Link to="/checkout" className="btn btn-dark border-primary w-100 text-light text-uppercase" type="button">
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <p className="text-center" style={{ marginTop: '150px', fontWeight: 500 }}>No Items in cart</p>
          <Link to="/">
            <button className="btn btn-dark text-center">Shop Now</button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Cart;
