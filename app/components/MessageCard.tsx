
const MessageCard = ({message, fromUser}: {message: string, fromUser: boolean}) => {
  return (
    <div className={`w-full h-fit py-3 px-2 flex ${fromUser ? 'justify-end' : 'justify-start'}`}>
        {/* Card Body */}
        <div className={`max-w-1/2 rounded-lg relative p-2.5 ${fromUser ? 'bg-primary-color text-white rounded-ee-none' : 'bg-white text-primary-color rounded-es-none'}`}>
            <p>{message}</p>
        </div>
    </div>
  )
}

export default MessageCard;
