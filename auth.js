
<script src="https://cdn.auth0.com/js/auth0/9.11/auth0.min.js"></script>
<script type="text/javascript">
  // Initialize client
  var webAuth = new auth0.WebAuth({
  //  domain:       'YOUR_DOMAIN',
    clientID:     'YOUR_CLIENT_ID'
  });
  
  webAuth.signup({ 
    connection: 'true', 
    email: 'vinamrasharma5@gmail.com', 
    password: '12321',
    username: "Vinamra",
    family_name: "Sharma",
    name: "Vinamra Sharma",
    nickname: "vinni",
    picture: "http://example.org/jdoe.png",
    user_metadata: { plan: 'silver', team_id: 'a111' }
  }, function (err) { 
    if (err) return alert('Something went wrong: ' + err.message); 
      return alert('success signup without login!') 
  });
</script>