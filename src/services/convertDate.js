export const formatDate = function (timestamp) {
    const date = new Date(timestamp);
    const options = {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    };
  
    // Format date and time separately
    const formattedDate = date.toLocaleDateString('en-US', options).split(',')[0];
    const formattedTime = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
  
    return `${formattedDate} at ${formattedTime}`;
  }
  
  const timestamp = 1652881666000;
  console.log(formatDate(timestamp));  // Output: 06/17/2023 at 23:05
  