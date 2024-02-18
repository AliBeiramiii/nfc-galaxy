import React, { useState } from 'react';
import axios from 'axios';

const OrderPorftolio: React.FC = () => {
  const [formData, setFormData] = useState({
    first_name_eng: '',
    last_name_eng: '',
    company_name: '',
    mobile_number_portfolio: 0,
    website_link: '',
    instagram_id: '',
    telegram_id: '',
    x_id: '',
    card_number: 0,
    sheba_number: 0,
    address_portfolio: '',
    location_link: '',
    card_color:'',
    card_quantity:'',
    product:'',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://your-backend-url/api/order-portfolio/', formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='flex flex-col'>
      <input type="text" name="first_name_eng" value={formData.first_name_eng} onChange={handleChange} placeholder="first_name_eng"/>
      <input type="text" name="last_name_eng" value={formData.last_name_eng} onChange={handleChange} placeholder="last_name_eng"/>
      <input type="text" name="company_name" value={formData.company_name} onChange={handleChange} placeholder="company_name" />
      <input type="number" name="mobile_number_portfolio" value={formData.mobile_number_portfolio} onChange={handleChange} placeholder="mobile_number_portfolio" />
      <input type="text" name="website_link" value={formData.website_link} onChange={handleChange} placeholder="website_link" />
      <input type="text" name="instagram_id" value={formData.instagram_id} onChange={handleChange}  placeholder="instagram_id"/>
      <input type="text" name="telegram_id" value={formData.telegram_id} onChange={handleChange} placeholder="telegram_id" />
      <input type="text" name="x_id" value={formData.x_id} onChange={handleChange} placeholder="x_id" />
      <input type="number" name="card_number" value={formData.card_number} onChange={handleChange} placeholder="card_number" />
      <input type="number" name="sheba_number" value={formData.sheba_number} onChange={handleChange} placeholder="sheba_number" />
      <textarea name="address_portfolio" value={formData.address_portfolio} onChange={handleChange} placeholder="address_portfolio"> </textarea>
      <input type="text" name="location_link" value={formData.location_link} onChange={handleChange} placeholder="location_link"/>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default OrderPorftolio;
