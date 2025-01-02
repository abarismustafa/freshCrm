import React, { useMemo, useRef, useState } from "react";
import { GrOpera } from "react-icons/gr";
import { Link } from "react-router-dom";
import JoditEditor from "jodit-react"; // Make sure to install jodit-react package

const NameToMessage = ({ placeholder }) => {
    const editor = useRef(null);
    const [content, setContent] = useState('');

    // Configuration for the JoditEditor
    const config = useMemo(() => ({
        readonly: false, // all options from https://xdsoft.net/jodit/docs/,
        placeholder: placeholder || 'Start typing...'
    }), [placeholder]);

    // Reset function
    const handleReset = () => {
        setContent('');
    };

    // Send function (you can customize this as needed)
    const handleSend = () => {
        alert('Message Sent!');
        // You can replace this with actual sending logic
    };

    return (
        <div>
            
            <form className='row'>
                <div className="mb-3 col-10">
                    <label htmlFor="receiverName" className="form-label">Receiver Name *</label>
                    <select className="form-control" id="receiverName">
                        <option value="--all country--">Select Option</option>
                        <option value="delhi">Ainal Haque</option>
                        <option value="delhi">Jhoe</option>
                        <option value="delhi">Goe</option>
                        <option value="delhi">Samox</option>
                    </select>
                </div>

                <div className="mb-3 col-10">
                    <label htmlFor="subject" className="form-label">Subject *</label>
                    <input
                        type="text"
                        className="form-control"
                        id="subject"
                        placeholder=""
                    />
                </div>

                <div className="mb-3 col-10">
                    <label htmlFor="message" className="form-label">Message *</label>
                    <JoditEditor
                ref={editor}
                value={content}
                config={config}
                tabIndex={1} // tabIndex of textarea
                onBlur={newContent => setContent(newContent)} // Update content on blur
                onChange={newContent => {}} // Empty handler as it's not needed here
            />

                </div>

                
            </form>

            <div className="row">
                <div className="col-1">
                    <Link
                        className="btn btn-primary btn-info"
                        role="button"
                        aria-controls="offcanvasExample"
                        onClick={handleReset}
                    >
                        Reset
                    </Link>
                </div>

                <div className="col-6">
                    <Link
                        className="btn btn-primary btn-success"
                        role="button"
                        aria-controls="offcanvasExample"
                        onClick={handleSend}
                    >
                        Send
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NameToMessage;
