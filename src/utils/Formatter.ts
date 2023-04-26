import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export function FormatterDate(newDate: string) {
    const FormatterDate = new Date(newDate);
    return formatDistanceToNow(FormatterDate, {
        addSuffix: true,
        locale: ptBR,
    })
}