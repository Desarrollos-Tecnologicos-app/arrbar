import { schedule} from 'node-cron'
import { getProductsPcTech, dropCollection } from '../services/products.service';

const scheduleGetCategories = async () => { 
  

  schedule('30 3 * * *', async() => {
    await dropCollection()
  })

  schedule('30 3 * * *', async() => {
    await getProductsPcTech()
  })

}

export { scheduleGetCategories }