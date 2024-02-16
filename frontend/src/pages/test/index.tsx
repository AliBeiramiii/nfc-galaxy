import React, { useState } from 'react';
import axios from 'axios';

const PortfolioForm: React.FC = () => {
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
      const response = await axios.post('http://your-backend-url/api/portfolio/', formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='flex flex-col'>
      <input type="text" name="first_name_eng" value={formData.first_name_eng} onChange={handleChange} />
      <input type="text" name="last_name_eng" value={formData.last_name_eng} onChange={handleChange} />
      <input type="text" name="company_name" value={formData.company_name} onChange={handleChange} />
      <input type="number" name="mobile_number_portfolio" value={formData.mobile_number_portfolio} onChange={handleChange} />
      <input type="text" name="website_link" value={formData.website_link} onChange={handleChange} />
      <input type="text" name="instagram_id" value={formData.instagram_id} onChange={handleChange} />
      <input type="text" name="telegram_id" value={formData.telegram_id} onChange={handleChange} />
      <input type="text" name="x_id" value={formData.x_id} onChange={handleChange} />
      <input type="number" name="card_number" value={formData.card_number} onChange={handleChange} />
      <input type="number" name="sheba_number" value={formData.sheba_number} onChange={handleChange} />
      <textarea name="address_portfolio" value={formData.address_portfolio} onChange={handleChange}></textarea>
      <input type="text" name="location_link" value={formData.location_link} onChange={handleChange} />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default PortfolioForm;
