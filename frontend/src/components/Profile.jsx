// import React, { useState } from 'react'
// import Navbar from './shared/Navbar'
// import { Avatar, AvatarImage } from './ui/avatar'
// import { Button } from './ui/button'
// import { Contact, Mail, Pen } from 'lucide-react'
// import { Badge } from './ui/badge'
// import { Label } from './ui/label'
// import AppliedJobTable from './AppliedJobTable'
// import UpdateProfileDialog from './UpdateProfileDialog'
// import { useSelector } from 'react-redux'
// import useGetAppliedJobs from '@/hooks/useGetAppliedJobs'

// // const skills = ["Html", "Css", "Javascript", "Reactjs"]
// const isResume = true;

// const Profile = () => {
//     useGetAppliedJobs();
//     const [open, setOpen] = useState(false);
//     const {user} = useSelector(store=>store.auth);

//     return (
//         <div>
//             <Navbar />
//             <div className='max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8'>
//                 <div className='flex justify-between'>
//                     <div className='flex items-center gap-4'>
//                         <Avatar className="h-24 w-24">
//                             <AvatarImage src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg" alt="profile" />
//                         </Avatar>
//                         <div>
//                             <h1 className='font-medium text-xl'>{user?.fullname}</h1>
//                             <p>{user?.profile?.bio}</p>
//                         </div>
//                     </div>
//                     <Button onClick={() => setOpen(true)} className="text-right" variant="outline"><Pen /></Button>
//                 </div>
//                 <div className='my-5'>
//                     <div className='flex items-center gap-3 my-2'>
//                         <Mail />
//                         <span>{user?.email}</span>
//                     </div>
//                     <div className='flex items-center gap-3 my-2'>
//                         <Contact />
//                         <span>{user?.phoneNumber}</span>
//                     </div>
//                 </div>
//                 <div className='my-5'>
//                     <h1>Skills</h1>
//                     <div className='flex items-center gap-1'>
//                         {
//                             user?.profile?.skills.length !== 0 ? user?.profile?.skills.map((item, index) => <Badge key={index}>{item}</Badge>) : <span>NA</span>
//                         }
//                     </div>
//                 </div>
//                 <div className='grid w-full max-w-sm items-center gap-1.5'>
//                     <Label className="text-md font-bold">Resume</Label>
//                     {
//                         isResume ? <a target='blank' href={user?.profile?.resume} className='text-blue-500 w-full hover:underline cursor-pointer'>{user?.profile?.resumeOriginalName}</a> : <span>NA</span>
//                     }
//                 </div>
//             </div>
//             <div className='max-w-4xl mx-auto bg-white rounded-2xl'>
//                 <h1 className='font-bold text-lg my-5'>Applied Jobs</h1>
//                 {/* Applied Job Table   */}
//                 <AppliedJobTable />
//             </div>
//             <UpdateProfileDialog open={open} setOpen={setOpen}/>
//         </div>
//     )
// }

// export default Profile



import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobTable from "./AppliedJobTable";
import UpdateProfileDialog from "./UpdateProfileDialog";
import { useSelector } from "react-redux";
import useGetAppliedJobs from "@/hooks/useGetAppliedJobs";

const isResume = true;

const Profile = () => {
  useGetAppliedJobs();
  const [open, setOpen] = useState(false);
  const { user } = useSelector((store) => store.auth);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] pb-10">
      <Navbar />

      {/* Profile Card */}
      <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl my-8 p-8 shadow-xl text-white relative">
        <div className="flex justify-between items-start">
          {/* Avatar + Name */}
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24 ring-2 ring-blue-400">
              <AvatarImage
                src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg"
                alt="profile"
              />
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-600 to-purple-600">
                {user?.fullname}
              </h1>
              <p className="text-gray-300">{user?.profile?.bio}</p>
            </div>
          </div>

          {/* Edit Button */}
          <Button
            onClick={() => setOpen(true)}
            className="border border-white/20 bg-white/10 text-white hover:bg-white/20"
            variant="outline"
          >
            <Pen className="w-4 h-4 mr-1" /> Edit
          </Button>
        </div>

        {/* Contact Info */}
        <div className="my-5 space-y-2 text-sm text-gray-300">
          <div className="flex items-center gap-3">
            <Mail className="w-4 h-4 text-blue-400" />
            <span>{user?.email}</span>
          </div>
          <div className="flex items-center gap-3">
            <Contact className="w-4 h-4 text-green-400" />
            <span>{user?.phoneNumber}</span>
          </div>
        </div>

        {/* Skills */}
        <div className="my-6">
          <h1 className="text-md font-semibold mb-2 text-white">Skills</h1>
          <div className="flex flex-wrap items-center gap-2">
            {user?.profile?.skills?.length !== 0 ? (
              user?.profile?.skills.map((item, index) => (
                <Badge
                  key={index}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm shadow-md"
                >
                  {item}
                </Badge>
              ))
            ) : (
              <span className="text-gray-400">NA</span>
            )}
          </div>
        </div>

        {/* Resume */}
        <div className="grid w-full max-w-sm items-center gap-2">
          <Label className="text-md text-white">Resume</Label>
          {isResume ? (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={user?.profile?.resume}
              className="text-blue-400 hover:underline truncate max-w-xs"
            >
              {user?.profile?.resumeOriginalName}
            </a>
          ) : (
            <span className="text-gray-400">NA</span>
          )}
        </div>
      </div>

      {/* Applied Jobs Table */}
      <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-white shadow-lg">
        <h1 className="text-lg font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-600 to-purple-600">
          Applied Jobs
        </h1>
        <AppliedJobTable />
      </div>

      <UpdateProfileDialog open={open} setOpen={setOpen} />
    </div>
  );
};

export default Profile;
