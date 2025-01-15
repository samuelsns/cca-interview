export async function addJobNote(sessionId: string, notes: string): Promise<boolean> {
  const payload = {
    request: {
      addJobNoteRequest: {
        source: {
          systemName: 'SB',
          version: '5.7'
        },
        targetSystem: 'SERVICEBENCH',
        callId: sessionId,
        notes
      }
    }
  };

  const response = await ESB.request<AddJobNoteResponse>(sessionId, {
    url: 'api/hsna-servicejob-papi/v1/addJobNote',
    method: 'POST',
    data: payload
  });

  return !response.response?.addJobNoteResponse?.errorDetails;
}
