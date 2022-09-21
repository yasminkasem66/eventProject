import { of } from "rxjs";
import { ISession } from "../models/sessions";
import { VoterService } from "./voter.service"


describe('voterService',()=>{
    let voterService:VoterService,mockHttp:any;
 
    beforeEach(()=>{
        mockHttp=jasmine.createSpyObj('mockHttp',['delete','post'])
        voterService=new VoterService(mockHttp) 
    })

    describe('deleteVoter',()=>{

        it('should remove the voter from the list of voters',()=>{
            var session={id:6,voters:['joe','john']};
            mockHttp.delete.and.returnValue(of(false))

            voterService.deleteVoter(3,<ISession>session,'joe')

            expect(session.voters.length).toBe(2);
            expect(session.voters[0]).toBe('joe')
    
        })
        it('should call http.delete with the right URL',()=>{
            var session={id:6,voters:['joe','john']};
            mockHttp.delete.and.returnValue(of(false))

            voterService.deleteVoter(3,<ISession>session,'joe')

            expect(mockHttp.delete).toHaveBeenCalledWith('/api/events/3/sessions/6/voters/joe')
    
        })

    })
})