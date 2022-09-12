const CalculateAge = () => {

  const today = new Date();
  const birthDate = new Date(1025560800000);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
  {
      age--;
  }
  return age;
  
}


export default CalculateAge;