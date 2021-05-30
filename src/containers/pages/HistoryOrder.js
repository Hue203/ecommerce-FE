import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { ClipLoader } from "react-spinners";
import { orderActions } from "../../redux/actions/order.actions";

const HistoryOrder = () => {
  const loading = useSelector((state) => state.order.loading);
  const currentUserOrder = useSelector((state) => state.order.orders);
  const history = useHistory();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(orderActions.getCurrentUserOrder());
  }, [dispatch]);
  return (
    <div>
      <h1>Order History</h1>
      {loading ? (
        <div className="text-center">
          <ClipLoader color="#f86c6b" size={150} loading={loading} />
        </div>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>PAID</th>
              <th>DELIVERED</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {currentUserOrder &&
              currentUserOrder.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>{order.totalPrice.toFixed(2)}</td>
                  <td>
                    {order.statusOrder
                      ? order.statusOrder.substring(0, 10)
                      : "No"}
                  </td>
                  <td>
                    {order.statusOrder
                      ? order.statusOrder.substring(0, 10)
                      : "No"}
                  </td>
                  <td>
                    <button
                      type="button"
                      className="small"
                      onClick={() => {
                        history.push(`/orders/${order._id}`);
                      }}
                    >
                      Details
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default HistoryOrder;
