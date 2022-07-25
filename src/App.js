// remote/src/App.js
import React, { useState, useEffect } from "react";
import useTeamMembers from './hooks'

const TeamMembersPage = () => {
  const { teamMembers, loadingTeamMembers, failedLoadingTeamMembers } = useTeamMembers()

  return (
    <div>
      TeamMembers:

      { loadingTeamMembers ? 'Loading team members...' : null }
      { !loadingTeamMembers && !failedLoadingTeamMembers ? (
        <div>
          { teamMembers.length ? (
              <ul>
                { teamMembers.map((teamMmber) => (
                  <li>{ teamMmber }</li>
                ))}
              </ul>
          ) : (
            <p>No team members found :( </p>
          )}
        </div>
      ) : null }

      { failedLoadingTeamMembers ? 'Failed loading!' : null }
    </div>
  )
}

export default TeamMembersPage;