import { ISession } from "../models/sessions";
import { VoterService } from "./voter.service"


describe('voterService',()=>{
    let voterService:VoterService,mockHttp;
 
    beforeEach(()=>{
        mockHttp=jasmine.createSpyObj('mockHttp',['delete','post'])
        voterService=new VoterService(mockHttp) 
    })

    describe('deleteVoter',()=>{
        it('should remove the voter from the list of voters',()=>{
            var session={id:6,voters:['joe','john']}
            voterService.deleteVoter(3,<ISession>session,'joe')
    
        })

    })

    it('',()=>{

    })
})