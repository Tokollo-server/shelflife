import React from "react";

// TotalPrice component to display the accumulated price of purchased items.
function TotalPrice({ totalPrice, isVisible }) {
  // If not visible, return null to render nothing.
  if (!isVisible) {
    return null;
  }

  return (
    // Bootstrap styling for a fixed position at the top-right.
    <div
      className="total-price-display position-fixed top-0 end-0 p-3 bg-info text-white shadow rounded-bottom-left"
      style={{ zIndex: 1050 }}
    >
      {/* h2 tag to display the total price. toFixed(2) formats to 2 decimal places. */}
      <h2>Total Price: R{totalPrice.toFixed(2)}</h2>
    </div>
  );
}

export default TotalPrice;
