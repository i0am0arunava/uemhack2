/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { useRef, useEffect } from "react";
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { v4 } from "uuid";




export default function userProf({params}:any){
    const  roomid = params.id;
    const meetingUIRef = useRef<HTMLDivElement>(null);
console.log(params);
    async function meetingUI(element: any) {
        const appId = 570161560;
        const serverSecret = "eae4f4fe5a7471521ac0ef247821f359";

        if (!roomid) {
            console.error("Room ID is undefined");
            return;
        }

        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appId,
            serverSecret,
            roomid,
            v4(),
            "Arun"
        );

        const ui = ZegoUIKitPrebuilt.create(kitToken);

        ui.joinRoom({
            container: element,
            scenario: {
                mode: ZegoUIKitPrebuilt.VideoConference,
            },
        });
    }

    useEffect(() => {
        if (meetingUIRef.current) {
            meetingUI(meetingUIRef.current);
        }
    }, [roomid]);

    return (
        <>
            <div ref={meetingUIRef}></div>
        </>
    );
}
