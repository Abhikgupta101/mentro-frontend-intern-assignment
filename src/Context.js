import React, { createContext, useContext, useEffect, useState } from 'react'

export const AuthContext = createContext()

function Context({ children }) {
    const [ar, setAr] = useState([
        {
            name: "Prankur Gupta",
            description: "I am Prankur Gupta, I am working as a Software Development Engineer at Amazon. I can guide you throughout your preparation phase. Trust me when I tell you this I know the exact recipe to crack the coding interview rounds of top companies for the SDE role.",
            role: "SDE @Amazon",
            rating: "4.9",
            stars: [1, 2, 3, 4, 0.9],
            picture: "https://firebasestorage.googleapis.com/v0/b/images-storage-d9e0b.appspot.com/o/project%2FPrankur.jpg?alt=media&token=cab91a33-772a-4dd0-b051-00afc867dea8"
        },
        {
            name: "Saurav Pal",
            description: "I am a Senior Software Developer American Express. Have been passionately solving Leetcode, HackerRank, Codechef, Codeforces problems, and enthusiastically solving problems with the analysis of space.",
            role: "SDE-2 @Amazon",
            rating: "5.0",
            stars: [1, 2, 3, 4, 5],
            picture: "https://firebasestorage.googleapis.com/v0/b/images-storage-d9e0b.appspot.com/o/project%2FSaurav.jpg?alt=media&token=4649b030-8e90-4e1e-a301-27368c28e455"
        },
        {
            name: "Saumya Singh",
            description: "Engineer @RedHat | Program Manager'20 @GirlScript | GHCI Scholar | International Open Source Award finalist by Red Hat | Winner SIH, 21U21 Award | Google Connect Winner'19 | Mentor GCI",
            role: "Software Engineer @Red Hat",
            rating: "5.0",
            stars: [1, 2, 3, 4, 5],
            picture: "https://firebasestorage.googleapis.com/v0/b/images-storage-d9e0b.appspot.com/o/project%2FSaumya.jpg?alt=media&token=54ff7ad1-bb2e-4bdf-969f-aad286d34dd2"
        },
        {
            name: "Keshav Bathla",
            description: "A curious learner, on a way to become a kickass developer who writes Python, Java, Javascript and Go | Software Engineer @Groww | Ex-Software Engineer @Grofers | Tech Consultant | Freelancer | Open Source Developer | Coding Instructor",
            role: "SDE-1 @Groww",
            rating: "5.0",
            stars: [1, 2, 3, 4, 5],
            picture: "https://firebasestorage.googleapis.com/v0/b/images-storage-d9e0b.appspot.com/o/project%2FKeshav.jpg?alt=media&token=20a9969a-a21d-4630-968b-fe2f9bed0e0c"
        },
        {
            name: "Ankita",
            description: "Working my way to build the world's future product. Machine Learning Engineer, Data and Technology Evangelist I breathe in developing software with intelligence. I have been involved with starstups like DailyHunt, Firework Hq, MagilHub to build the AI end of their products.",
            role: "ML Engineer @Firework",
            rating: "5.0",
            stars: [1, 2, 3, 4, 5],
            picture: "https://firebasestorage.googleapis.com/v0/b/images-storage-d9e0b.appspot.com/o/project%2FAnkita.jpg?alt=media&token=e321e95d-25e9-46fb-944e-3551e2958e5f"
        }
    ])

    const [shift, setShift] = useState("next")

    return (
        <AuthContext.Provider value={{ ar, setAr, shift, setShift }}>
            {children}
        </AuthContext.Provider>
    )
}

export const AuthContextState = () => {
    return useContext(AuthContext)
}

export default Context