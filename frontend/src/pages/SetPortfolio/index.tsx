import React, {useState} from 'react';
import axios from 'axios';


// Function to handle form submission and send data to backend
const SetPortfolio = () => {
    const [firstNameValue, setFirstNameValue] = useState('');
    const [lastNameValue, setLastNameValue] = useState('');
    const [companyNameValue, setCompanyNameValue] = useState('');
    const [mobileNumberPortfolioValue, setMobileNumberPortfolioValue] = useState('');
    const [websiteLinkValue, setWebsiteLinkValue] = useState('');
    const [youtubeLinkValue, setYoutubeLinkValue] = useState('');
    const [linkedInIdValue, setLinkedInIdValue] = useState('');
    const [whatsAppIdValue, setWhatsAppIdValue] = useState('');
    const [facebookIdValue, setFacebookIdValue] = useState('');
    const [itaIdValue, setItaIdValue] = useState('');
    const [snapchatIdValue, setSnapchatIdValue] = useState('');
    const [roobikaValue, setRoobikaValue] = useState('');
    const [instagramIdValue, setInstagramIdValue] = useState('');
    const [telegramIdValue, setTelegramIdValue] = useState('');
    const [xIdValue, setXIdValue] = useState('');
    const [cardNumberValue, setCardNumberValue] = useState('');
    const [shebaNumberValue, setShebaNumberValue] = useState('');
    const [visaCardNumberValue, setVisaCardNumberValue] = useState('');
    const [payPalNumberValue, setPayPalNumberValue] = useState('');
    const [mastecardNumberValue, setMastecardNumberValue] = useState('');
    const [addressPortfolioValue, setAddressPortfolioValue] = useState('');
    
    
    const formData = new FormData();
    formData.append("first_name_eng", firstNameValue);
    formData.append("last_name_eng",lastNameValue);
    formData.append("company_name", companyNameValue);
    formData.append("mobile_number_portfolio", mobileNumberPortfolioValue);
    formData.append("website_link", websiteLinkValue);
    formData.append("youtube_link", youtubeLinkValue);
    formData.append("linked_in_id", linkedInIdValue);
    formData.append("whatsapp_id", whatsAppIdValue);
    formData.append("facebook_id", facebookIdValue);
    formData.append("ita_id", itaIdValue);
    formData.append("snapchat_id", snapchatIdValue);
    formData.append("roobika", roobikaValue);
    formData.append("instagram_id", instagramIdValue);
    formData.append("telegram_id", telegramIdValue);
    formData.append("x_id", xIdValue);
    formData.append("card_number", cardNumberValue);
    formData.append("sheba_number", shebaNumberValue);
    formData.append("visa_card_number", visaCardNumberValue);
    formData.append("paypal_number", payPalNumberValue);
    formData.append("mastecard_number", mastecardNumberValue);
    formData.append("address_portfolio", addressPortfolioValue);
    
    
    const sendDataToBackend = async () => {
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/set-portfolio/', formData);
        console.log(response.data); // Handle the response data as needed
      } catch (error) {
        console.error('Error sending data to backend:', error);
      }
    };
    return (
        <div>
    <label>First Name (English):</label>
    <input type="text" value={firstNameValue} onChange={(e) => setFirstNameValue(e.target.value)} placeholder="first name (English)"/>
  
    <label>Last Name (English):</label>
    <input type="text" value={lastNameValue} onChange={(e) => setLastNameValue(e.target.value)} placeholder="last name (English)"/>
  
    <label>Company Name:</label>
    <input type="text" value={companyNameValue} onChange={(e) => setCompanyNameValue(e.target.value)} placeholder="company name"/>
  
    <label>Mobile Number:</label>
    <input type="text" value={mobileNumberPortfolioValue} onChange={(e) => setMobileNumberPortfolioValue(e.target.value)} placeholder="mobile number"/>
  
    <button onClick={sendDataToBackend}>set portfolio Card</button>
  </div>
  );
  
};
export  default SetPortfolio;