function getUserStatus() {
    //var status_code; // behind the scenes, declaration is hoisted
    console.log(status_code);
    var status_code = 'active';
    console.log('User status:', status_code);
}

getUserStatus();
