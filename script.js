body {
  margin: 0;
  font-family: 'Playfair Display', serif;
  background: #fff0f5;
  color: #5b2c47;
  overflow-x: hidden;
  overflow-y: auto;
}

#rose-container {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  position: relative;
  z-index: 2;
  text-align: center;
}

.hidden {
  display: none;
}

.quote {
  font-family: 'Dancing Script', cursive;
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: #b30059;
  animation: fadeIn 3s ease forwards;
}

.riddle-block h2 {
  font-size: 2rem;
}

.choices button {
  margin: 1rem;
  padding: 0.7rem 1.5rem;
  font-size: 1.1rem;
  border: none;
  border-radius: 8px;
  background: #ffe4ec;
  cursor: pointer;
  font-family: 'Dancing Script', cursive;
  transition: background 0.3s ease;
}

.choices button:hover {
  background: #ffc8dc;
}

.newspaper {
  background: #fef6e4;
  padding: 2rem;
  border: 3px dashed #e29595;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0,0,0,0.1);
}

.newspaper h1 {
  font-size: 3rem;
}

.creative-btn {
  margin-top: 2rem;
  background: #ffccd5;
  border: none;
  padding: 0.8rem 1.5rem;
  font-family: 'Dancing Script', cursive;
  font-size: 1.5rem;
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.3s;
}

.creative-btn:hover {
  transform: scale(1.05);
}

.cards {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2rem;
}

.card {
  width: 180px;
  height: 220px;
  perspective: 1000px;
  cursor: pointer;
  position: relative;
}

.card .front, .card .back {
  width: 100%;
  height: 100%;
  background: #fff0f6;
  border: 2px solid #ffb6c1;
  border-radius: 10px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Dancing Script', cursive;
  font-size: 1.3rem;
  backface-visibility: hidden;
  transition: transform 0.8s;
}

.card .back {
  transform: rotateY(180deg);
}

.card.flipped .front {
  transform: rotateY(180deg);
}

.card.flipped .back {
  transform: rotateY(360deg);
}

.email-btn {
  background: #ffdce1;
  padding: 1rem 2rem;
  text-decoration: none;
  color: #9a2a4d;
  font-size: 1.2rem;
  border-radius: 8px;
  margin-top: 1rem;
  display: inline-block;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}