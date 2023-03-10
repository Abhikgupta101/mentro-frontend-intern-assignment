import React from 'react'
import { AuthContextState } from './Context'

const User = (profile, index) => {
    const { shift } = AuthContextState()
    return (
        <>
            <div className={`middle_circle${profile.index}`}>
                <img src={profile.profile.picture} style={{ width: "200px", height: "200px", borderRadius: "100%" }} />
            </div>
            {shift == "next" ? <div className={`circle${profile.index}`}>
                <img src={profile.profile.picture} style={{ width: "120px", borderRadius: "100%" }} />
            </div > : null}
            {shift == "prev" ? <div className={`circle-prev-${profile.index}`}>
                <img src={profile.profile.picture} style={{ width: "120px", borderRadius: "100%" }} />
            </div > : null}
            <div className='profile_name'>
                {shift == "next" ? <div className={`profile_name${profile.index}`}>
                    {profile.profile.name}
                </div> : null}
                {shift == "prev" ? <div className={`profile_name_prev${profile.index}`}>
                    {profile.profile.name}
                </div> : null}
            </div>
        </>
    )
}

export default User