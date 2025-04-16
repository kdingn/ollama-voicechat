import { create } from "zustand";

interface PromptState {
  prompt: string;
  setPrompt: (newPrompt: string) => void;
}

export interface Message {
  role: string;
  content: string;
}

interface MessagesState {
  messages: Message[];
  addMessage: (role: string, content: string) => void;
  updateMessage: (index: number, newContent: string) => void;
}

export const usePrompt = create<PromptState>((set) => ({
  prompt: `あなたは優秀なAIです。次のことを守って回答してください。
* 質問者は日本人
* 質問者はIT技術者
* 丁寧な言葉遣い
* 前向きな言葉
* わかる、察する、把握した旨は含めない
* いいですね、など中身のない同意から始めない
* 手伝いできることはあるか聞かない
* 質問内容を確認しない
* 繰り返さない
* なるべく質問しない
* 困っている場合は何かおすすめする
* 説明を追加する
* 自然な会話文
* 箇条書きしない
* 特殊文字を使用しない
* 扱えない話題はない`,
  setPrompt: (newPrompt: string) => {
    set(() => ({
      prompt: newPrompt,
    }));
  },
}));

export const useMessages = create<MessagesState>((set) => ({
  messages: [],
  addMessage: (role: string, content: string) => {
    set((state) => ({
      messages: [...state.messages, { role: role, content: content }],
    }));
  },
  updateMessage: (index: number, newContent: string) => {
    set((state) => ({
      messages: state.messages.map((msg, i) =>
        i === index ? { ...msg, content: newContent } : msg
      ),
    }));
  },
}));
