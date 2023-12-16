import axios from 'axios'

const generateOrderPCTECH = async (order: any) => {
    const url = `${process.env.urlPCTECH}/extcust/makeorder`;

    try {
        const { data, status} = await axios.post(
            `${url}`,
            { customer: order.customer, key: order.key, ...order },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            }
        )

        if (status === 200) {
            return data
        }
    } catch (error) {
        console.error('Error generate order:', error);
        throw error;
    }
    
}

export { generateOrderPCTECH }