document.getElementById('loan__details__ANZrates').addEventListener('click', function() {
    let select = document.getElementById('loan__details__ANZRatesSelect');
    let label = document.getElementById('loan__details__ANZrates');
    
    if (select.style.display === 'none' || select.style.display === '') {
      select.style.display = 'block'; 
      label.style.display = 'none';
    } else {
      select.style.display = 'none';
      label.style.display = 'inline';
    }
});

document.getElementById('loan__details__ANZRatesSelect').addEventListener('change', function() {
    let select = document.getElementById('loan__details__ANZRatesSelect');
    let label = document.getElementById('loan__details__ANZrates');
    let rateInput = document.getElementById('loan__details__rate');
    
    select.style.display = 'none';
    label.style.display = 'inline';
    rateInput.value = select.value + '%'; 
});
