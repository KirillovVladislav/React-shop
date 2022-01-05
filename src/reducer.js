export function reducer(state, { type, payload }) {
  switch (type) {
    case "ADD_TO_BASKET": {
      const itemIndex = state.order.findIndex(
        orderItem => orderItem.id === payload.id
      )
      let newOrder = null
      if (itemIndex < 0) {
        const newItem = {
          ...payload,
          quantity: 1,
        }
        newOrder = [...state.order, newItem]
      } else {
        newOrder = state.order.map((orderItem, index) => {
          if (index === itemIndex) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            }
          } else {
            return orderItem
          }
        })
      }

      return {
        ...state,
        order: newOrder,
        alertName: payload.name,
      }
    }

    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        order: state.order.filter(orderItem => orderItem.id !== payload.id),
      }

    case "CLOSE_ALERT":
      return {
        ...state,
        alertName: "",
      }

    case "INCREMENT_QUANTITY":
      return {
        ...state,
        order: state.order.map(orderItem => {
          if (orderItem.id === payload.id) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            }
          } else {
            return orderItem
          }
        }),
      }

    case "DECREMENT_QUANTITY":
      return {
        ...state,
        order: state.order.map(orderItem => {
          if (orderItem.id === payload.id) {
            const newQuantity = orderItem.quantity - 1
            return {
              ...orderItem,
              quantity: newQuantity >= 1 ? newQuantity : 1,
            }
          } else {
            return orderItem
          }
        }),
      }
    case "TOGGLE_BASKET":
      return {
        ...state,
        isBasketShow: !state.isBasketShow,
      }

    default:
      return state
  }
}
