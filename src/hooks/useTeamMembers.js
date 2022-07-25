import { useState, useEffect } from 'react';

export const useTeamMembers = () => {
  const [teamMembers, setTeamMembers] = useState([])
  const [loadingTeamMembers, setLoadingTeamMembers] = useState(false)
  const [failedLoadingTeamMembers, setFailedLoadingTeamMembers] = useState(false)

  useEffect(() => {
    (async () => {
      try {
        setLoadingTeamMembers(true)
        setTeamMembers(['george'])
        setLoadingTeamMembers(false)
      } catch (error) {
        setFailedLoadingTeamMembers(true)
        setLoadingTeamMembers(false)
      }
    })()
  }, [])

  return {
    teamMembers,
    loadingTeamMembers,
    failedLoadingTeamMembers
  }
}

export default useTeamMembers