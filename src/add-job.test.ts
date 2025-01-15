describe('addJobNote', () => {
  const mockSessionId = 'test-session';
  const mockNotes = 'Test notes';

 
  it('test', async () => {

    const mockResponse = {
      response: {
        sourceSystemRefId: '123',
        sourceSystemName: 'SB',
        sourceSystemVersion: '5.7',
        transactionId: 'tx123',
        outcome: {
          resultCode: 'SUCCESS',
          resultDescription: 'Note added successfully'
        },
        addJobNoteResponse: {}
      }
    };

    jest.spyOn(ESB, 'request').mockResolvedValue(mockResponse);

    await expect(addJobNote(mockSessionId, mockNotes)).resolves.toBe(true);

  });
});
