import './App.css';
import { Box } from './components/box';
function App() {
  return (
    <div className="main">
      <div className="center-column">
        <div className="box-title">
          <h1>Simple, traffic-based pricing</h1>
          <span>Sign-up for our 30-day trial. No credit card required</span>
        </div>
        <Box>
          <div className="box-top">
            <span className="views">100K PAGEVIEWS</span>
            <div>
              <span className="amount">$16.00</span>
              <span className="time">/month</span>
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
}

export default App;
