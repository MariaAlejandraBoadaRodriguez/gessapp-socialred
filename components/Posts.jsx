import { useState } from 'react';
import { db } from '../firebase';

export default function Posts() {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');

  const handlePostSubmit = async event => {
    event.preventDefault();
    try {
      const postRef = db.collection('posts').doc();
      await postRef.set({
        title,
        summary
      });
      setTitle('');
      setSummary('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Nuevo post</h2>
      <form onSubmit={handlePostSubmit}>
        <label htmlFor="title">Título</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />

        <label htmlFor="summary">Resumen</label>
        <textarea
          id="summary"
          value={summary}
          onChange={event => setSummary(event.target.value)}
        />

        <button type="submit">Publicar</button>
      </form>
    </div>
  );
}
