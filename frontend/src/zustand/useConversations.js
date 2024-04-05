import { create } from "zustand";



//needed to learn in deep to understand
const useConversation = create((set) => ({
	selectedConversation: null,
	setSelectedConversation: (selectedConversation) => set({ selectedConversation }),
	messages: [],
	setMessages: (messages) => set({ messages }),
}));

export default useConversation;

//this code snippet creates a custom React hook called "useConversation" 
// using the "zustand" library for managing state. This hook provides state and state updater
//  functions for managing a conversation, including the selected conversation and messages 
// within that conversation.