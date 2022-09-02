function displayUserProfile(profile){ };

console.log(getJSON("/profile").then(displayUserProfile));