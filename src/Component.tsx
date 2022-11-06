interface ImageItem {
  id: number;
  title: string;
  imageUrl: string;
}

interface QuoteItem {
  id: number;
  quote: string;
}

// union type
export type Item = ImageItem | QuoteItem;

interface ComponentProps {
  items: Item[];
}

const Component = ({ items }: ComponentProps) => {
  const styles = {
    img: {
      maxWidth: "15rem",
    },
    quote: {
      fontStyle: "italic",
    },
  };
  return (
    <ul>
      {items.map(item => {
        if ("title" in item) {
          return (
            <li key={item.id}>
              <p>{item.title}</p>
              {item.imageUrl && (
                <img style={styles.img} src={item.imageUrl} alt={item.title} />
              )}
            </li>
          );
        }
        return (
          <li key={item.id}>
            <p style={styles.quote}>{item.quote}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Component;
