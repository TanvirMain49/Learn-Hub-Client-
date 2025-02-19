import React from 'react'
import StudentBanner from '../../../Component/Student/StudentBanner'
import useBooked from '../../../Hooks/useBooked'
import StudentCourse from '../../../Component/Student/StudentCourese'

export default function StudentDash() {
    const {bookedSessions} = useBooked()
  return (
    <div>
      <StudentBanner />

      <div>
        <StudentCourse bookedSessions={bookedSessions.length} />
      </div>
    </div>
  )
}
