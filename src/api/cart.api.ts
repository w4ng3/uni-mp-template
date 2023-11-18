/**
 * 加入购物车
 * @param data 请求体参数
 */
export const postMemberCartAPI = (data: CartParams) => {
  return http({
    method: 'POST',
    url: '/cart/add',
    data
  })
}
/**
 * 获取购物车列表
 */
export const getMemberCartAPI = () => {
  return http<CartItem[]>({
    method: 'GET',
    url: '/cart/list'
  })
}
/**
 * 删除/清空购物车单品
 * @param data 请求体参数 ids SKUID 集合
 */
export const deleteMemberCartAPI = (ids: string[]) => {
  return http({
    method: 'DELETE',
    url: '/cart/remove',
    data: ids
  })
}
/**
 * 修改购物车单品
 * @param id 单品 id
 * @param data selected 选中状态 count 商品数量
 */
export const putMemberCartBySkuIdAPI = (id: string, data: { selected?: boolean; count?: number }) => {
  return http({
    method: 'PUT',
    url: '/cart/edit',
    data: { id, ...data }
  })
}
/**
 * 购物车全选/取消全选
 * @param data selected 是否选中
 */
export const putMemberCartSelectedAPI = (data: { selected: boolean }) => {
  return http({
    method: 'PUT',
    url: `/cart/selected?selected=${data.selected}`
  })
}

/**
 * 填写订单-获取预付订单
 */
export const getMemberOrderPreAPI = () => {
  return http<OrderPreResult>({
    method: 'GET',
    url: '/order/pre'
  })
}

/**
 * 填写订单-获取立即购买订单
 */
export const getMemberOrderPreNowAPI = (data: {
  /** 商品主键 */
  id: string
  /** 商品属性 */
  attrsText: string
  /** 地址id */
  addressId?: string
  /** 商品数量 */
  count: string
}) => {
  return http<OrderPreResult>({
    method: 'POST',
    url: '/order/pre/now',
    data
  })
}

/**
 * 提交订单
 * @param data 请求参数
 */
export const postMemberOrderAPI = (data: OrderCreateParams) => {
  return http<{ id: string }>({
    method: 'POST',
    url: '/order/submit',
    data
  })
}
/**
 * 获取订单详情
 * @param id 订单id
 */
export const getMemberOrderByIdAPI = (id: string) => {
  return http<OrderResult>({
    method: 'GET',
    url: '/order/info',
    data: { id }
  })
}
/**
 * 填写订单-再次购买
 * @param id 订单id
 */
export const getMemberOrderRepurchaseByIdAPI = (id: string) => {
  return http<OrderPreResult>({
    method: 'GET',
    url: `/order/repurchase`,
    data: { id }
  })
}

/**
 * 获取微信支付参数
 * @param data orderId 订单id
 */
export const getPayWxPayMiniPayAPI = (data: { orderId: string }) => {
  return http<WechatMiniprogram.RequestPaymentOption>({
    method: 'GET',
    url: '/pay/wxPay/miniPay',
    data
  })
}

/**
 * 模拟支付-内测版
 * @param data orderId 订单id
 */
export const getPayMockAPI = (id: number) => {
  return http({
    method: 'GET',
    url: '/order/pay',
    data: { id }
  })
}
/**
 * 模拟发货-内测版
 * @description 在DEV环境下使用，仅在订单状态为待发货时，可模拟发货，调用后订单状态修改为待收货，包含模拟物流。
 * @param id 订单id
 */
export const getMemberOrderConsignmentByIdAPI = (id: string) => {
  return http({
    method: 'GET',
    data: { id },
    url: '/order/consignment'
  })
}

/**
 * 确认收货
 * @description 仅在订单状态为待收货时，可确认收货。
 * @param id 订单id
 */
export const putMemberOrderReceiptByIdAPI = (id: string) => {
  return http<OrderResult>({
    method: 'PUT',
    url: `/order/receipt?id=${id}`
  })
}
/**
 * 获取订单物流
 * @description 仅在订单状态为待收货，待评价，已完成时，可获取物流信息。
 * @param id 订单id
 */
export const getMemberOrderLogisticsByIdAPI = (id: string) => {
  return http<OrderLogisticResult>({
    method: 'GET',
    url: '/order/logistics',
    data: { id }
  })
}
/**
 * 删除订单
 * @description 仅在订单状态为待评价，已完成，已取消时，可删除订单。
 * @param data ids 订单集合
 */
export const deleteMemberOrderAPI = (ids: string[]) => {
  return http({
    method: 'DELETE',
    url: `/order/delete`,
    data: ids
  })
}
/**
 * 取消订单
 * @description 仅在订单状态为待付款时，可取消订单。
 * @param data cancelReason 取消理由; id 订单id
 */
export const getMemberOrderCancelByIdAPI = (data: { id: string; cancelReason: string }) => {
  return http<OrderResult>({
    method: 'PUT',
    url: '/order/cancel',
    data
  })
}

/**
 * 获取订单列表
 * @param data orderState 订单状态
 */
export const getMemberOrderAPI = (data: OrderListParams) => {
  return http<OrderListResult>({
    method: 'POST',
    url: `/order/page`,
    data
  })
}
