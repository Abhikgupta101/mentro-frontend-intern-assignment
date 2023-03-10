import React from 'react'
import Circle from './Circle'
import { AuthContextState } from './Context'
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';

const Profile = () => {
    const { shift, setShift, ar } = AuthContextState()
    return (
        <>
            <div className='profile_cont'>
                <div className="info" >
                    {
                        ar.map((profile, index) => (

                            <div className={`info_cont${index}`} key={profile.name}>
                                <div className='info_rating'>
                                    <div>{profile.rating}</div>
                                    <div>
                                        {
                                            profile.stars.map((star) => (
                                                star >= 1 ? <StarIcon /> : <StarHalfIcon />
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className='user'>
                                    <div className='user_name'>
                                        {profile.name}
                                    </div>
                                    <div className='user_position'>
                                        {profile.role}
                                    </div>
                                </div>
                                <div className='user_info'>
                                    {profile.description}
                                </div>
                                <div className='book_session'>
                                    <button className='btn'>Book a session</button>
                                </div>
                            </div>

                        ))
                    }
                </div>

                <div className='profiles'>
                    <Circle />
                </div>

            </div>
        </>
    )
}

export default Profile