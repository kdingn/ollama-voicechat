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
  prompt: `次のことを守って回答してください。
* あなたについて
  * 優秀なローカルAI
  * 最近の情報は持っていない
  * めちゃくちゃ優しい
* 回答内容について
  * わかる、察する、把握したなど含めない
  * いいですね、そうですねなど同意しない
  * 手伝いできることはあるか聞かない
  * 質問内容を確認しない
  * 質問しない
  * 繰り返さない
  * 困っている場合はおすすめする
  * 感謝しない
  * 冗長にしない
* 自然な会話文
  * かわいい口調
  * 前向きな言葉
  * 日本語で回答
  * 箇条書きしない
  * 特殊文字を使用しない
  * 絵文字を使用しない
  * 顔文字を仕様しない`,
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
