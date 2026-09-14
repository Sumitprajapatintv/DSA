function helpher(pr,up,loginAttempt,i)
{
    if(i==up.length)
    {
        if(pr.join('')==loginAttempt)
        {
            return pr.join(' ')
        }
        return null
    }
    let result= helpher([...pr,up[i]],up,loginAttempt,i+1)
    if(result!=null)
    {
        return result
    }
    result=helpher([...pr],up,loginAttempt,i+1)
    return result
}
function passwordCracker(passwords, loginAttempt) {
     let res=helpher([],passwords.split(' '),loginAttempt,0)
    return res || "WRONG PASSWORD"

}
console.log(passwordCracker("gurwgrb maqz holpkhqx aowypvopu","gurwgrb"))