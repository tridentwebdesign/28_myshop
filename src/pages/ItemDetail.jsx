import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ItemDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/items.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.items.find((i) => i.id === id);
        setItem(found ?? null);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p className="loading">読み込み中...</p>;
  }

  if (!item) {
    return (
      <div className="item-detail item-detail--notfound">
        <p>アイテムが見つかりません。</p>
        <Link to="/" className="item-detail__back">← 一覧へ戻る</Link>
      </div>
    );
  }

  return (
    <div className="item-detail">
      <Link to="/" className="item-detail__back">← 一覧へ戻る</Link>
      <div className="item-detail__image">
        <img src={item.image} alt={item.name} />
        {item.status === "soldout" && (
          <span className="item-detail__badge">soldout</span>
        )}
      </div>
      <div className="item-detail__body">
        <p className="item-detail__category">{item.category}</p>
        <h2 className="item-detail__name">{item.name}</h2>
        <p className="item-detail__price">¥{item.price.toLocaleString()}</p>
        <p className="item-detail__description">{item.description}</p>
      </div>
    </div>
  );
}
