type OrderStatus = 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered';

interface OrderStatusProps {
  status: OrderStatus
}

const orderStatusMap: Record<OrderStatus, string> = {
  pending: 'Pendente',
  canceled: 'Cancelado',
  delivered: 'Entregue',
  delivering: 'Em entrega',
  processing: 'Em preparo'
}

export function OrderStatus({ status }: OrderStatusProps) {
  const statusColor = status === 'pending' ? 'bg-slate-400' 
    : status === 'canceled' ? 'bg-rose-500' 
    : status === 'delivered' ? 'bg-emerald-500' 
    : status === 'processing' ? 'bg-amber-500' : 'bg-amber-500'
  return (
    <div className="flex items-center gap-2">
      <span className={`h-2 w-2 rounded-full ${statusColor}`} />
      <span className="font-medium text-muted-foreground">{orderStatusMap[status]}</span>
    </div>
  )
}