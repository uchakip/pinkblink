const [skincare, setSkincare] = useState([]);

useEffect(() => {
  // Fetch data and update the skincare state
  getskincare()
    .then((skincareData) => {
      // Make sure skincareData is an array before updating the state
      if (Array.isArray(skincareData)) {
        setSkincare(skincareData);
      } else {
        console.error("Data from getItems is not an array.");
      }
    })
    .catch((err) => {
      console.error(err);
    });
}, []); // Empty dependency array ensures the effect runs only once
